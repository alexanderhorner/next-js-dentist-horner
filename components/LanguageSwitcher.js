import { useRouter } from 'next/router';

export default function LanguageSwitcher({ children, simple, noborders }) {
  console.log(children);
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleLocaleChange = () => {
    const nextLocale = router.locale === 'de' ? 'en' : 'de';
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <button
    className={`whitespace-nowrap rounded-lg transition-colors ${
        simple
          ? 'bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-200'
          : 'bg-indigo-600 text-white hover:bg-indigo-800'
      }
      ${
        noborders
          ? 'flex items-center h-full px-2 py-2 border-none hover:bg-indigo-200'
          : 'px-3 py-2 hover:bg-indigo-200'
      }`}
      onClick={handleLocaleChange}
    >
      {children || (router.locale === 'de' ? 'Switch to English' : 'Zur deutschen Version')}

    </button>
  );
}
