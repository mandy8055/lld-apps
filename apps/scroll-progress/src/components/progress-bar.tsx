type ProgressBarProps = {
  progress: number;
};
export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className='fixed top-0 left-0 bg-gray-300 w-full h-1.5 z-20'>
      <div
        className='bg-green-600 transition-all duration-150 h-full'
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
