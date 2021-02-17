// store data by key
async function cache_store(key, value) {}

// retrieves data by key (if it exists)
async function cache_retrieves(key) {}

// fetches data from a slow data source
async function slow_function(input) {}

function memoize(slow_function) {
  var cache = {};
  return function fast_function() {
      if (cache[input]) {
        return cache[input]
      } else {
        val = slow_function.apply(null, input)
        cache[input] = val
        return val;
      }
  }
}
