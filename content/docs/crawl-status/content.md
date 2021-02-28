+++
fragment = "content"
#disabled = true
date = "2021-02-28"
weight = 1
#background = ""

title = "Crawl Status - Documentation"
subtitle = "How to interpret the crawl status column"

[sidebar]
title = "Sidebar"
align = "left"
sticky = true # Default is false
content = """
[OK](#ok)  
[Canonicalised](#canonicalised)  
[Header-Canonicaliased](#header-canonicalised)  
[robots.txt](#blocked-by-robotstxt)
[X-Robots-Tag](#blocked-by-x-robots-tag)
[Meta-Robots-Tag](#blocked-by-meta-robots-tag)
"""
+++

 
## OK
 
Ok within the crawl status column reflects a successful request occurring. This means when the URI was requested there was no issue in returning the content for the page. Indicating that the URL is 100% healthy from a technical SEO perspective, and you’re good to go!
 
## Canonicalised
 
Canonicalised within the crawl status column indicates that the crawled URL is pointing to a different URL within its HTML canonical tag value. By using a different URL within the canonical tag you are signaling to Google to index the canonical URL over the crawled URL. This is done to avoid duplication within search and avoid different landing pages and keywords on the same domain from competing against each other.

### Header Canonicalised

Canonicalised within the crawl status column indicates that the crawled URL is pointing to a different URL within its HTTP header canonical tag value. By using a different URL within the canonical tag you are signaling to Google to index the canonical URL over the crawled URL. This is done to avoid duplication within search and avoid different landing pages and keywords on the same domain from competing against each other.

## Blocked By Robots.txt

Blocked by Robots.txt within the crawl status column indicates that the URI that has been requested (by the search crawler) has been instructed not to be requested/crawled. Robots.txt is a set of instructions search engine crawlers use to understand how they should access your site. 

## Blocked by X Robots Tag


Blocked by Meta Robots Tag within the crawl status column indicates that the URI requested has an HTTP header which has returned an X-Robots-Tag  value of a noindex directive. This will indicate to search engine crawlers that the page should not be stored within their indexes. A good example of when to use an HTTP header directive would be for a PDF file which is a non-html based document that cannot use HTML meta directives. 


## Blocked by Meta Robots Tag

Blocked by Meta Robots Tag within the crawl status column indicates that the URI requested has HTMl directives found within the head of the document which indicate a value of noindex directive. This will indicate to search engine crawlers that the page should not be stored within their indexes. 

---