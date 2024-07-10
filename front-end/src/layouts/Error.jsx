export default function Error() {
  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
}
