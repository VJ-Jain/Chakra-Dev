# Chakra-Dev
Siri Bhoovalay Chakra Analysis - Dev Environment

# Deployment Steps
- Project MKKSB --> Publish From Visual Studio
  - Use Absolute Path as Target Location - for e.g. c:\src\MKKSB\Publish
  - Configuration - Release
  - Target - .net 8.0
  - Deployment Mode - self-contained
  - target runtime - browser-wasm
  - Ahead of time compilation - ticked
  - Delete all existing files prior to publish - ticked
  - Publish
- In Published wwwroot folder
  - edit index.html `<head> <base href="/{xyz}/"/>` - `xyz` should be github repo name i.e. `Chakra-Dev`
  - create a copy of edited index.html & rename to 404.html in same folder
  - add a blank `.nojekyll` file to root
- Push to `master` branch for static web app deployment.
- Github Actions deploy this automatically to https://vj-jain.github.io/Chakra-Dev