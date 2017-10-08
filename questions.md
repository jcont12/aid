1.- I cant get my render method to render a file within a specific folder within the views folder (can't redirect the path), must therefor have all the view templates in the view folder, how can I change this?? (FIXED BUT... fixed by adding two app.set one with view engine and the other one with routes.... but then what is the following for?? app.engine('html', ejs.renderFile);)

2.- I can render partials, but what is the appropriate way to render the layout without having to include it in every app.
