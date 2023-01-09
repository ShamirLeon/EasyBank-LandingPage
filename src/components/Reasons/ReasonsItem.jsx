const ReasonsItem = ({title, description}) => {
  return (
    <article className="flex flex-col items-center lg:items-start gap-4 mb-12 lg:gap-0">
      <h2 className="text-xl text-DarkBlue">{title}</h2>
      <p className="text-base text-GrayishBlue">{description}</p>
    </article>
  );
};

export default ReasonsItem;
