# Usage
```
npx create-react-app my-app2 --template @tiffinger-thiel/cra-template-typescript
```

# Merge upstream

```
git checkout upstream/main
git subtree split -P packages/cra-template-typescript -b temp-branch
git checkout update
git merge -s subtree -Xsubtree="packages/cra-template-typescript" temp-branch --allow-unrelated-histories
```

# Publish
```
cd packages/cra-template-typescript && npm run publish:template
```