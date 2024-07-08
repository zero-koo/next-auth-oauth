type OAuthButtonProps = React.PropsWithChildren<{
  icon: React.FC<{ size?: number }>;
  siteName: string;
}>;

const OAuthButton = ({ icon: Icon, siteName }: OAuthButtonProps) => {
  return (
    <button
      type="submit"
      className="flex h-12 w-full items-center gap-5 rounded-lg border px-4"
    >
      <Icon size={25} />
      <div className="flex flex-1 items-center justify-center">
        <span className="mr-1 inline-flex w-14 justify-between font-bold">
          {siteName.split('').map((s, index) => (
            <span key={index}>{s}</span>
          ))}
        </span>
        <span className="text-sm">로 계속하기</span>
      </div>
    </button>
  );
};

export default OAuthButton;
