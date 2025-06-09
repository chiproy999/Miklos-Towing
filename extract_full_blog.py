import re
import json
import html
from urllib.parse import unquote

def extract_blog_data(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the _BLOG_DATA JavaScript object
    blog_data_match = re.search(r'window\._BLOG_DATA\s*=\s*({.*?});', content, re.DOTALL)
    
    if blog_data_match:
        try:
            blog_json = blog_data_match.group(1)
            blog_data = json.loads(blog_json)
            
            post = blog_data.get('post', {})
            
            # Extract basic info
            title = post.get('title', 'No title')
            date = post.get('date', 'No date')
            categories = post.get('categories', [])
            featured_image = post.get('featuredImage', '')
            
            # Extract full content from the fullContent field
            full_content_json = post.get('fullContent', '{}')
            
            if full_content_json:
                try:
                    content_data = json.loads(full_content_json)
                    blocks = content_data.get('blocks', [])
                    
                    # Extract text from blocks
                    content_text = []
                    for block in blocks:
                        text = block.get('text', '').strip()
                        if text and text != ' ':
                            # Decode HTML entities and clean up
                            clean_text = html.unescape(text)
                            content_text.append(clean_text)
                    
                    full_text = '\n\n'.join(content_text)
                    
                except json.JSONDecodeError:
                    full_text = post.get('content', 'Content extraction failed')
            else:
                full_text = post.get('content', 'Content extraction failed')
            
            # Extract meta description from head
            head = blog_data.get('head', {})
            meta_list = head.get('meta', [])
            description = ''
            for meta in meta_list:
                if meta.get('key') == 'og:description':
                    description = html.unescape(meta.get('value', ''))
                    break
            
            return {
                'title': title,
                'date': date,
                'categories': categories,
                'featured_image': featured_image,
                'description': description,
                'content': full_text
            }
            
        except json.JSONDecodeError as e:
            print(f"JSON decode error: {e}")
            return None
    
    return None

# Process all posts
posts_data = []
post_urls = [
    "what-to-do-when-your-car-breaks-down-in-tulsa-oklahoma",
    "tulsa-underwater-recovery-in-action", 
    "top-10-towing-roadside-assistance-companies-in-tulsa-2025",
    "why-24-hour-towing-in-tulsa-is-essential-for-every-driver"
]

for i, url_slug in enumerate(post_urls, 1):
    filename = f'/home/ubuntu/post{i}.html'
    post_data = extract_blog_data(filename)
    if post_data:
        posts_data.append(post_data)
        print(f"=== POST {i}: {post_data['title']} ===")
        print(f"Date: {post_data['date']}")
        print(f"Categories: {', '.join(post_data['categories'])}")
        print(f"Featured Image: {post_data['featured_image']}")
        print(f"Description: {post_data['description'][:200]}...")
        print(f"Content Length: {len(post_data['content'])} characters")
        print(f"Content Preview: {post_data['content'][:300]}...")
        print('\n' + '='*80 + '\n')

# Save to JSON for later use
with open('/home/ubuntu/blog_posts_data.json', 'w') as f:
    json.dump(posts_data, f, indent=2)

print(f"Extracted {len(posts_data)} blog posts successfully!")
