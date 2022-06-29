# Decompiled WhatsApp source code from the KaiOS app.

## How to get this?

Use the below command to get the list of all apps on the store.

```sh
curl -X GET --compressed -H "User-Agent: Mozilla/5.0 (Mobile; LYF/F90M/LYF-F90M-000-03-31-121219; Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5" -H "Content-Type: application/json" "https://api.kai.jiophone.net/v2.0/apps?cu=F90M-FBJIINA" -o apps.json
```

Then, from the app search for `WhatsApp` and get the url of the package.
