export default function useFiles() {
  const submitFile = async (f: File, name: string) => {
    try {
      const fileName = name.replace(" ", "-")
      // const submit = await (await fetch("url")).json();
      await Promise.resolve();
      return fileName;
    } catch (e) {
      console.error(e);
      alert("Something went wrong, please check you network status and if the problem persist contact the admin");
    }
  };

  return { submitFile };
}
