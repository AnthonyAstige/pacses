Small library to generate package localised session getter / setter methods

1. meteor add anthony:pacses
1. var set = Packses.genGet(packageName);
1. var get = Packses.genGet(packageName);
1. Use get(...) / set(...) like you would Session.get(...) / Session.set(...) in your package
 * Automatically localised by prefixing with the package name
