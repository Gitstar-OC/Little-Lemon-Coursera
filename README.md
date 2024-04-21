# Little Lemon Coursera
- This is the code for the final week of  <a href="https://www.coursera.org/learn/meta-front-end-developer-capstone?specialization=meta-front-end-developer"> Front-End Developer Capstone Course </a> by Meta which is a part of <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer?utm_source=gg&utm_medium=sem&utm_campaign=B2C_INDIA_Meta_FTOCF_Front_End_Developer_Meta_Professional_Certificate_ArtE&utm_content=B2C&campaignid=20672771440&adgroupid=159938653356&device=c&keyword=front%20end%20certification&matchtype=p&network=g&devicemodel=&adpostion=&creativeid=696893433118&hide_mobile_promo&gad_source=1&gclid=CjwKCAjwz42xBhB9EiwA48pT77E8m8XWEPArKoLa5tYEavbVtjjMULb6F39e3CdM3T3lVQ5PNKylkxoCrVoQAvD_BwE"> Meta Front-End Developer Professional Certificate</a> 

## About the Project
- The Capstone project at the center of this course is based on a scenario involving the restaurant Little Lemon. In particular, the owners of Little Lemon have received negative feedback on the reserve a table function on the Little Lemon website. Users are confused about how to use it and unhappy with how it looks and functions. You have to build a responsive web app and demonstrate multiple skills by coding a modern front end application that allows users to reserve a table for the Little Lemon restaurant. 


## Useful React Scripts 
- If you have cloned this repository, you should first run `npm install` or `yarn install` to install the node files
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### `npm init react-app name-of-the-app` or `npx create-react-app name-of-the-app`
#### `npm start`
#### `npm test`
#### `npm run eject`
#### `npm run build`

Other Packages Used 
- React Router
For Windows: 
 ````
npm install react-router-dom
````
For Mac: 
````
yarn add react-router-dom
````


## Useful Git Commands 

#### Run the `git init` command to initialize the repository.

#### Use the `git add command` to stage your files for commit.

#### Use the `git commit` command to commit your staged changes.

#### Use the `git remote` command to add a remote for the repository on GitHub.

#### Use the `git push` command to push the commits to the remote repository.

#### Run the `git status` command, then the `git log` command to confirm that Git is tracking your project locally and that you have the correct Git user set up.

#### Run the `git fetch` command to retrieve the latest changes from a remote repository.

#### Run the `git merge <branch>` to merge the branch into the branch you are in.

#### Alternately you can also run `git pull` to fetch and integrate changes.


## Useful VS Code Extensions 
### [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
### [Emmet Keybindings](https://marketplace.visualstudio.com/items?itemName=agutierrezr.emmet-keybindings)
### [Continue - Llama 3, GPT-4, and more](https://marketplace.visualstudio.com/items?itemName=Continue.continue) 
### [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
### [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
### [Trailing Spaces](https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces)

## Metadata cheat sheet!

### #HTML <meta> tags 

- ####  Name 
The name of the property can be anything you like, although browsers usually expect a value they understand and can take an action upon. An example would be <meta name="author" content="name"> to state the author of the page. 

- ####  Content 
The content field specifies the property's value. For example, you can use <meta name="language" content="english">, to specify the language of the webpage to search engines. 

- #### Charset 
The charset is a special field that lets you specify the character encoding used for the page so that the browser can display it properly. The most frequently used is utf-8, and you would add it to your HTML header as follows: <meta charset="UTF-8">  

- #### HTTP-equiv 
This field stands for HTTP equivalent, and it’s used to simulate HTTP response headers. This is rare to see, and it’s recommended to use HTTP headers over HTML http-equiv meta tags. For example, the next tag would instruct the browser to refresh the page every 30 minutes: <meta http-equiv="refresh" content="30"> 

### #Basic meta tags (meta tags For SEO) 
#### `<meta name="description"/>` provides a brief description of the web page 

#### `<meta name=”title”/>` specifies the title of the web page 

#### `<meta name="author" content="name">` specifies the author of the web page  

#### `<meta name="language" content="english">` specifies the language of the web page 

#### `<meta name="robots" content="index,follow" />` tells search engines how to crawl or index a certain page 

#### `<meta name="google"/>` tells Google not to show the sitelinks search box for your page when showing search results 

#### `<meta name="googlebot" content=”notranslate” />` tells Google you don’t want to provide an automatic translation for your page if the user uses a different language  

#### `<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />` specifies the last modified date and time on which you have made certain changes 

#### `<meta name="rating" content="safe for kids">` specifies the expected audience for your page 

#### `<meta name="copyright" content="Copyright 2022">` specifies a Copyright 


### #meta http-equiv="..." tags
#### `<mta http-equiv="content-type" content="text/html">` specifies the format of the document returned by the server 

#### `<meta http-equiv="default-style"/>`  specifies the format of the styling document 

#### `<meta http-equiv="refresh"/>` specifies the duration of the page before it’s considered stale 

#### `<meta http-equiv=”Content-language”/>` specifies the language of the page 

#### `<meta http-equiv="Cache-Control" content="no-cache">` instructs the browser how to cache your page 

### #Responsive design/mobile meta tags 
#### `<meta name="format-detection" content="telephone=yes"/>` indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call 

#### `<meta name="HandheldFriendly" content="true"/>` specifies that the page can be properly visualized on mobile devices 

#### `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>` specifies the area of the window in which web content can be seen

## Semantic tags Cheat Sheet

### Sectioning tags
- Use the following tags to organize your HTML document into structured sections. 
#### `<header>` - The header of a content section or the web page. The web page header often contains the website branding or logo.
#### `<nav>` - The navigation links of a section or the web page.
#### `<footer>` - The footer of a content section or the web page. On a web page, it often contains secondary links, the copyright notice, privacy policy and cookie policy links.
#### `<main>` - Specifies the main content of a section or the web page.
#### `<aside>` - A secondary set of content that is not required to understand the main content.
#### `<article>` - An independent, self-contained block of content such as a blog post or product.
#### `<section>` - A standalone section of the document that is often used within the body and article elements.
#### `<details>` - A collapsed section of content that can be expanded if the user wishes to view it.
#### `<summary>` - Specifies the summary or caption of a `<details>` element.
#### `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` - Headings on the web page. `<h1>` indicates the most important heading whereas `<h6>` indicates the least important.

### Content Tags
#### `<blockquote>` - Used to describe a quotation.
#### `<dd>` - Used to define a description for the preceding `<dt>` element.
#### `<dl>` - Used to define a description list.
#### `<dt>` - Used to describe terms inside `<dl>` elements.
#### `<figcaption>` - Defines a caption for a photo image.
#### `<figure>` - Applies markup to a photo image.
#### `<hr>` - Adds a horizontal line to the parent element.
#### `<li>` - Used to define an item within a list.
#### `<menu>` - A semantic alternative to `<ul>` tag.
#### `<ol>` - Defines an ordered list.
#### `<p>` - Defines a paragraph.
#### `<pre>` - Used to represent preformatted text. Typically rendered in the web browser using a monospace font.
#### `<ul>` - Unordered list.

### Inline Tags
#### `<a>` - An anchor link to another HTML document.
#### `<abbr>` - Specifies that the containing text is an abbreviation or acronym.
#### `<b>` - Bolds the containing text. When used to indicate importance use `<strong>` instead.
#### `<br>` - A line break. Moves the subsequent text to a new line.
#### `<cite>` - Defines the title of creative work (for example a book, poem, song, movie, painting or sculpture). The text in the `<cite>` element is usually rendered in italics.
#### `<code>` - Indicates that the containing text is a block of computer code.
#### `<data>` - Indicates machine-readable data.
#### `<em>` - Emphasizes the containing text.
#### `<i>` - The containing text is displayed in italics. Used to indicate idiomatic text or technical terms.
#### `<mark>` - The containing text should be marked or highlighted.
#### `<q>` - The containing text is a short quotation.
#### `<s>` - Displays the containing text with a strikethrough or line through it.
#### `<samp>` - The containing text represents a sample.
#### `<small>` - Used to represent small text, such as copyright and legal text.
#### `<span>` - A generic element for grouping content for CSS styling.
#### `<strong>` - Displays the containing text in bold. Used to indicate importance.
#### `<sub>` - The containing text is subscript text, displayed with a lowered baseline.
#### `<sup>` - The containing text is superscript text, displayed with a raised baseline.
#### `<time>` - A semantic tag used to display both dates and times.
#### `<u>` - Displays the containing text with a solid underline.
#### `<var>` - The containing text is a variable in a mathematical expression.

### Embedded Content and Media Tags
#### `<audio>` - Used to embed audio in web pages.
#### `<canvas>` - Used to render 2D and 3D graphics on web pages.
#### `<embed>` - Used as a containing element for external content provided by an external application such as a media player or plug-in application.
#### `<iframe>` - Used to embed a nested web page.
#### `<img>` - Embeds an image on a web page.
#### `<object>` - Similar to `<embed>` but the content is provided by a web browser plug-in.
#### `<picture>` - An element that contains one `<img>` element and one or more `<source>` elements to offer alternative images for different displays/devices.
#### `<video>` - Embeds a video on a web page.
#### `<source>` - Specifies media resources for `<picture>`, `<audio>` and `<video>` elements.
#### `<svg>` - Used to define Scalable Vector Graphics within a web page.
#### `<table>` - Defines a table element to display table data within a web page.
#### `<thead>` - Represents the header content of a table. Typically contains one `<tr>` element.
#### `<tbody>` - Represents the main content of a table. Contains one or more `<tr>` elements.
#### `<tfoot>` - Represents the footer content of a table. Typically contains one `<tr>` element.
#### `<tr>` - Represents a row in a table. Contains one or more `<td>` elements when used within `<tbody>` or `<tfoot>`. When used within `<thead>`, contains one or more `<th>` elements.
#### `<td>` - Represents a cell in a table. Contains the text content of the cell.
#### `<th>` - Defines a header cell of a table. Contains the text content of the header.
#### `<caption>` - Defines the caption of a table element.
#### `<colgroup>` - Defines a semantic group of one or more columns in a table for formatting.
#### `<col>` - Defines a semantic column in a table.

### Open Graph Protocol (OGP)
- You can find out more information about the OGP and about how to use the Open Graph tags from the 
[Open Graph Protocol](https://ogp.me)  website.

#### `og:title`
The og:title meta tag is there for you to give a title for your shared link or shared content.

#### `og:description`
A title is usually followed by a description, which is what the og:description meta tag is for.

#### `og:image`
The og:image meta tag specifies the image to serve when a link is shared on social media. 




## HAPPY CODING! 🙂 [MUST FOLLOW CODE OF CONDUCT](https://github.com/Gitstar-Om/Little-Lemon-Coursera?tab=coc-ov-file)


