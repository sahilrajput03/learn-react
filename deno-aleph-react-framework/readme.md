# Readme

deno run --watch myfile.ts
^^ Use that to watch a file with deno.

Use `aleph -h` to know how to use aleph cli options.
Usually you need `aleph dev` to run the dev server though.
Its a complete failure.!!


deno cache --reload https://deno.land/x/aleph@v0.3.0-alpha.33/cli.ts
deno cache --reload https://deno.land/x/aleph@v0.3.0-alpha.33/cli/init.ts
deno cache --reload https://deno.land/x/aleph@v0.3.0-alpha.33/cli/dev.ts

Its that deno saves every file to cache you get to update the cache if there is some problem like that: 

Check below issue for complete details of how cache can suck you in deno::
https://github.com/alephjs/aleph.js/discussions/329

****


deno upgrade #It would upgrade deno to latest version.

deno run -A https://deno.land/x/aleph/install.ts #this would just run a sript from that.
Also sometimes that can be cache issue again, so use reload flag to reload script again..

deno run --reload -A https://deno.land/x/aleph/install.ts
