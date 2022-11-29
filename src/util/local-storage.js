export function read(){
  const d = window.localStorage.getItem('myapp')
  return d ? JSON.parse(d) : {};
}
export function write(data){
  window.localStorage.setItem('myapp', JSON.stringify(data));
}