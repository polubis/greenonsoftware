## Create diet

### When signed in

1. User signed in
2. We're taking the `uid` from session
3. Calling AI provider with prompt based on provided `inputs`
  - if similar inputs exists in `cache` or other mechanism, just return from `cache`
  - otherwise do

```text
I want to create a `period` diet for following person:

180 height, 120 weight, ...etc

Provide me a response with following format:

...[list]

{
   "name": Spaghetti,
   "macros": {
    "kalories"
   }

}
```

4. Validate the response quality (if the diet fits into our standards)
5. If yes entry into `recipes` collection recipes from created diet if they're not repeating
6. Creating entry in the DB according to the diagram inside `diets-collection`.