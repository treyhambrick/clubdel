<template>
  <div class="about">
    <h1>This is site built with vue for Club Del Cielo</h1>

  <ul>
  <li><B>Execution Steps:</B></li> 
  <li>open command prompt</li> 
  <li>cd C:\Users\thambrick\clubdel</li> 
  <li>npm run build or npm run serve </li>
  <li>to upload to GitHub:  npm run deploy </li>
  <li>Then just run.bat to execute the commands below:</li>
    <li>git init</li>
    <li>git add .</li>
    <li>git commit -m "first commit123"</li>
    <li>git branch -M main</li>
    <li>git remote add origin https://github.com/treyhambrick/clubdel.git</li>
    <li>if "remote origin already exists" then "git remote rm origin"</li>
    <li>git push -u origin main</li>
    <li>gh-pages branch:</li> 
    <li>Note: Remove the dist directory from the project’s .gitignore file</li>
    <li>git add dist && git commit -m "Initial dist subtree commit"</li>
    <li>git subtree push --prefix dist origin gh-pages</li>
  </ul>

  </div>
</template>






