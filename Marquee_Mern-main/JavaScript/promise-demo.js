const p = new Promise((res) => setTimeout(() => res('done'), 1000));
p.then(console.log);
