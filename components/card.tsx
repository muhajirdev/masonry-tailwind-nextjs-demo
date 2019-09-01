type Props = {
  src: string;
  title: string;
};
export default ({ src, title }: Props) => (
  <div className="relative cursor-pointer">
    <img className="rounded" src={src} />
    <style jsx>{`
      .overlay {
        background: linear-gradient(0deg, black, transparent);
      }
    `}</style>
    <div className="overlay absolute bottom-0 w-full h-24 px-4 pt-6">
      <div className="text-white text-lg">{title}</div>
      <div className="text-gray-400 text-sm">Photographer</div>
    </div>
  </div>
);
