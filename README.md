# to-do-list
To-Do-List project from The Odin Project. I've used my knowledge of SOLID principles, npm, webpack, json etc. to build this project.

Things learnt:
1. Set the mode to development in package.json
2. Look for your site in localhost:8088 and not dist folder
3. getter setter in classes are not enumerable. JSON methods will not work on non-enumerable properties.
4. You cannot JSON.stringify a Map/set directly. You have to first convert it to array using Array.from() then stringify it.
5. When you start working on UI, think how a first time user would use your website to identify the chain.