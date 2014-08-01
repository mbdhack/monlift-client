// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app/build",
	  "components" : "../app/build/components",
	  "entities" : "../app/build/entities"

    }
});

// Load the main app module to start the app
requirejs(["app/index"]);