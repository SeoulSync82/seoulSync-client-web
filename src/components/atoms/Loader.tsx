/* HTML: <div class="loader"></div> */
const Loader = () => {
  return (
    <div className="h-full w-full">
      <div className="animate-loading absolute left-[50%] top-[50%] aspect-[1] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-[50%]"></div>
    </div>
  );
};
export default Loader;
