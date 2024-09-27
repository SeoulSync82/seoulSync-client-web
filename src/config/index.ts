import config from '@/config/config';

const getConfigInfo = () => {
  const mode: 'production' | 'staging' =
    import.meta.env.VITE_APP_MODE?.toString() || import.meta.env.MODE;
  const info = config[mode];
  const version = import.meta.env.VITE_APP_VERSION?.toString();

  return {
    mode,
    version,
    ...info,
  };
};

export default getConfigInfo();
