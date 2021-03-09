export default function ProjectCard(props) {
  return (
    <div class="max-w-full rounded overflow-hidden shadow-lg my-2 lg:mx-6">
      <img class="w-full object-cover h-60" src={props.img} alt={props.title} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl m-2">{props.title}</div>
        <p class="text-gray-400 text-base m-1">{props.time}</p>
        {props.descriptions &&
          props.descriptions.map((des) => {
            return <p class="text-gray-500 text-base text-left">{"· "+des}</p>;
          })}
      
      </div>
      {props.tags &&
        props.tags.map((tag) => {
          return (
            <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-gray-500">
              {"#" + tag}
            </span>
          );
        })}
        <div className="my-4">{props.demoName && <a class="text-yellow-500 text-base text-left" target="_blank" href={props.demoLink} rel="noreferrer">{props.demoName}</a>}</div>
    </div>
  );
}
