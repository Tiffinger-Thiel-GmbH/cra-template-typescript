# Merge upstream

```
git checkout upstream/main
git subtree split -P packages/cra-template-typescript -b temp-branch
git checkout update
git merge -s subtree -Xsubtree="packages/cra-template-typescript" temp-branch --allow-unrelated-histories
```

# Publish
```
npm run publish:template
```