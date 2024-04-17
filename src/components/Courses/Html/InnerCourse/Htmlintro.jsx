import React from 'react'
import HtmlCode from './HtmlCode'

export default function Htmlintro() {

  const htmlCode = `
< !DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
    <body>

        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>

    </body>
</html>`

  const JavaScript = `
< !DOCTYPE html >
      <html>
          <body>
              <h2>JavaScript if .. else</h2>
              <p>A time-based greeting:</p>
              <p id="demo"></p>
          <script>
              const time = new Date().getHours();
              let greeting;
              if (time < 10) {
                greeting = "Good morning";
                  } else if (time < 20) {
                greeting = "Good day";
                    } else {
                greeting = "Good evening";
                    }
              document.getElementById("demo").innerHTML = greeting;
          </script>
          </body>
</html>`

  return (
    <div className='htmlHome'>
      <h1>HTML Introduction</h1>
      <HtmlCode code={JavaScript} />
      <hr />
      <p>HTML is the standard markup language for creating Web pages.</p>
      <hr />
      <h2>What is HTML</h2>
      <ul>
        <li>HTML stands for Hyper Text Markup Language</li>
        <li>HTML is the standard markup language for creating Web pages</li>
        <li>HTML consists of a series of elements</li>
        <li>HTML elements tell the browser how to display the content</li>
        <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
      </ul>
      <h1>A Simple HTML Document</h1>
      <HtmlCode code={htmlCode} />
    </div>
  )
}


