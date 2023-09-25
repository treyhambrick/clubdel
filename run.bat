git init
git add .
git commit -m "first commit1234"
git branch -M main
git remote add origin https://github.com/treyhambrick/clubdel.git
git push -u origin main
git add dist && git commit -m "Initial dist subtree commit"
git subtree push --prefix dist origin gh-pages