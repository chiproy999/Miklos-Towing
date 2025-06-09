import re
import html

def extract_blog_content(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract title
    title_match = re.search(r'<title[^>]*>([^<]*)</title>', content)
    title = title_match.group(1) if title_match else 'No title found'
    
    # Extract meta description
    meta_desc = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']*)["\']', content, re.IGNORECASE)
    description = meta_desc.group(1) if meta_desc else 'No description found'
    
    # Extract meta keywords
    meta_keywords = re.search(r'<meta[^>]*name=["\']keywords["\'][^>]*content=["\']([^"\']*)["\']', content, re.IGNORECASE)
    keywords = meta_keywords.group(1) if meta_keywords else 'No keywords found'
    
    # Extract main content - look for article content or main text
    content_patterns = [
        r'<article[^>]*>(.*?)</article>',
        r'<main[^>]*>(.*?)</main>',
        r'<div[^>]*class=["\'][^"\']*content[^"\']*["\'][^>]*>(.*?)</div>',
        r'<div[^>]*class=["\'][^"\']*post[^"\']*["\'][^>]*>(.*?)</div>',
        r'<div[^>]*class=["\'][^"\']*blog[^"\']*["\'][^>]*>(.*?)</div>'
    ]
    
    main_content = 'Content extraction failed'
    for pattern in content_patterns:
        match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
        if match:
            raw_content = match.group(1)
            # Remove HTML tags and decode entities
            clean_content = re.sub(r'<[^>]+>', ' ', raw_content)
            clean_content = html.unescape(clean_content)
            clean_content = re.sub(r'\s+', ' ', clean_content).strip()
            if len(clean_content) > 100:  # Only use if substantial content
                main_content = clean_content
                break
    
    # If no structured content found, try to extract from body
    if main_content == 'Content extraction failed':
        body_match = re.search(r'<body[^>]*>(.*?)</body>', content, re.DOTALL | re.IGNORECASE)
        if body_match:
            body_content = body_match.group(1)
            # Remove script and style tags
            body_content = re.sub(r'<script[^>]*>.*?</script>', '', body_content, flags=re.DOTALL | re.IGNORECASE)
            body_content = re.sub(r'<style[^>]*>.*?</style>', '', body_content, flags=re.DOTALL | re.IGNORECASE)
            # Remove HTML tags
            clean_content = re.sub(r'<[^>]+>', ' ', body_content)
            clean_content = html.unescape(clean_content)
            clean_content = re.sub(r'\s+', ' ', clean_content).strip()
            main_content = clean_content
    
    return {
        'title': title,
        'description': description,
        'keywords': keywords,
        'content': main_content[:2000] + '...' if len(main_content) > 2000 else main_content
    }

# Process all 4 posts
posts = []
for i in range(1, 5):
    filename = f'/home/ubuntu/post{i}.html'
    post_data = extract_blog_content(filename)
    posts.append(post_data)
    print(f'=== POST {i} ===')
    print(f'Title: {post_data["title"]}')
    print(f'Description: {post_data["description"]}')
    print(f'Keywords: {post_data["keywords"]}')
    print(f'Content Preview: {post_data["content"][:500]}...')
    print('\n' + '='*80 + '\n')
