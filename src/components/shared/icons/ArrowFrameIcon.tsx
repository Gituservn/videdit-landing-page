export const ArrowFrameIcon = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <svg
      width="56"
      height="32"
      viewBox="0 0 56 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="icon arrow"
      className={`${className}`}
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.0115 0.871582L55.3462 14.5419C56.2228 15.4184 56.2228 16.8396 55.3462 17.7162L41.5774 31.1462C40.5193 30.0882 40.9818 30.5672 40.1052 29.6907C39.2286 28.8141 39.9902 29.5591 38.403 27.9719L48.3402 18.3736L0 18.3736L0 13.8845L48.3402 13.8845L38.8372 4.0459C39.8953 2.98779 39.5474 3.33497 40.424 2.45841C41.3006 1.58184 41.4822 1.40035 42.0115 0.871582Z"
        fill="currentColor"
      />
    </svg>
  );
};
