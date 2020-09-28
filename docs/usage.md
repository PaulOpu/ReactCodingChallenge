## Development

The app can be tested by executing the `start.sh` script. The development app is on port 3000.

```bash static
bash start.sh;
```


## Production

To build the app run `build.sh` and afterwards you can start a server to use the app. The production app is on port 5000.

```bash
bash build.sh;
serve -s build;
```