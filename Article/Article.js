// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.markAsRead = this.domElement.querySelector('.markRead');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    // Mark as read
    this.markAsRead.innerText = 'Mark as Read (remove)';
    this.markAsRead.addEventListener('click', () => this.markRead());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.domElement.classList.contains('article-open') === true ? this.expandButton.innerText = 'Click to Collapse' : this.expandButton.innerText = 'Click to Expand';
  }

  markRead() {
    this.domElement.classList.add('clearFirst');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

// Get articles
let articles = document.querySelectorAll('.article');

// Loop over all articles, creating a new instance of Article
articles.forEach(article => new Article(article));