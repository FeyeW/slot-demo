import useLoginStore from "./modules/login";

/**
 * pinia 子模块的命名规范 use开头 加子模块名称 以Store结尾，采用驼峰命名
 * */
const useStore = () => ({
  login: useLoginStore(),
});

export default useStore;
