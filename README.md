# Usage
```
npx create-react-app my-app --template @tiffinger-thiel/cra-template-typescript
```

# Merge upstream

```
git remote add upstream git@github.com:facebook/create-react-app.git
git checkout upstream/main
git subtree split -P packages/cra-template-typescript -b temp-branch
git checkout update
git reset --hard main
git merge -s subtree -Xsubtree="packages/cra-template-typescript" temp-branch --allow-unrelated-histories
```

# Publish
```
./release.sh
```