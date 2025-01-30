import { useInView } from "react-intersection-observer";

export default function useInViewAnimation(options = {}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    ...options, // opsi tambahan jika diperlukan
  });

  return { ref, inView };
}
