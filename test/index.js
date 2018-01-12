
const htmlStr = '<!DOCTYPE html><html><head></head></html>';
function omitDoctype(origin){
  return origin.replace(/\<!DOCTYPE.+?\>/g,'');
}
console.log(omitDoctype(htmlStr));