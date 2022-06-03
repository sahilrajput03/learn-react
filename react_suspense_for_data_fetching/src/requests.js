export async function fetch1(ref) {
  console.log("#1 Request sent...");
  await new Promise((res) => setTimeout(res, 2000));
}

export function fetch2(ref) {
  return new Promise((res) => {
    console.log("#1 Request sent...");
    // Do some task here to be able to remove this error somehow and actually fix the error anyhow coz this function will be called infinitely times till it no longer throws itself. Yikes!
    setTimeout(() => {
      ref.loading = false;
      res();
    }, 5000);
  });
}
