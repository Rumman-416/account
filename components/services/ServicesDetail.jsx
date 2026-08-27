import Image from "next/image";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../layout/Button";
import { useContactModal } from "../layout/ContactModalProvider";

const SEARCH_THRESHOLD = 8;

const ServicesDetail = ({ data }) => {
  const { openContactModal } = useContactModal();
  const [openItems, setOpenItems] = useState([]);
  const [query, setQuery] = useState("");

  const subServices = useMemo(
    () => (data?.subServices ?? []).map((item, index) => ({ ...item, index })),
    [data]
  );

  // Registration alone has 26 entries; scanning that as a flat list is rough.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return subServices;
    return subServices.filter(
      (item) =>
        item.name?.toLowerCase().includes(q) ||
        item.data?.toLowerCase().includes(q)
    );
  }, [subServices, query]);

  const allOpen =
    filtered.length > 0 && filtered.every((item) => openItems.includes(item.index));

  const toggleItem = (idx) =>
    setOpenItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );

  const toggleAll = () =>
    setOpenItems(allOpen ? [] : filtered.map((item) => item.index));

  return (
    <section className="containerx containery">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-[3vw]">
        {/* Left - sticky media + CTA */}
        <motion.aside
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-[34%] lg:sticky lg:top-28"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              fill
              src={data?.image}
              alt={data?.name}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 34vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 to-transparent" />
          </div>

          {/* The old page had an Enquire button with no handler at all. */}
          <div className="mt-4 lg:mt-[1.2vw] rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 lg:p-[1.4vw]">
            <span className="subheading block mb-2">Need help?</span>
            <h3 className="text-white text-lg lg:text-[1.2vw] font-semibold mb-2">
              Talk to a specialist
            </h3>
            <p className="text-white/45 text-xs lg:text-[0.78vw] font-light leading-relaxed mb-4 lg:mb-[1.1vw]">
              Tell us what you need and we&apos;ll walk you through the
              paperwork, timelines and costs.
            </p>
            <Button
              text="Enquire Now"
              onClick={openContactModal}
              className="w-full justify-center"
            />
          </div>
        </motion.aside>

        {/* Right - content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:w-[62%]"
        >
          <span className="subheading mb-3 lg:mb-[0.8vw] block">Our Service</span>
          <h2 className="heading text-white mb-4 lg:mb-[1.5vw]">{data?.name}</h2>
          <p className="content text-white/50 mb-8 lg:mb-[2.5vw]">
            {data?.description}
          </p>

          {/* Toolbar */}
          <div className="mb-4 lg:mb-[1.2vw] flex flex-wrap items-center justify-between gap-3">
            <p className="text-white/40 text-xs lg:text-[0.78vw]">
              <span className="text-white font-medium">{subServices.length}</span>{" "}
              {subServices.length === 1 ? "service" : "services"}
              {query && ` · ${filtered.length} matching`}
            </p>

            {subServices.length > 0 && (
              <button
                type="button"
                onClick={toggleAll}
                className="text-brand-500 hover:text-brand-400 text-xs lg:text-[0.78vw] font-medium transition-colors"
              >
                {allOpen ? "Collapse all" : "Expand all"}
              </button>
            )}
          </div>

          {subServices.length > SEARCH_THRESHOLD && (
            <div className="relative mb-4 lg:mb-[1.2vw]">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${data?.name?.toLowerCase()} services`}
                aria-label="Search services"
                className="input-field !py-3 lg:!py-[0.7vw] pl-11 lg:pl-[2.8vw]"
              />
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute left-4 lg:left-[1.1vw] top-1/2 -translate-y-1/2 w-4 h-4 lg:w-[1vw] lg:h-[1vw] text-white/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </div>
          )}

          {/* Sub-services accordion */}
          <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
            {filtered.map((item) => {
              const isOpen = openItems.includes(item.index);
              return (
                <div
                  key={item.index}
                  className="border-b border-white/[0.06] last:border-b-0"
                >
                  <button
                    onClick={() => toggleItem(item.index)}
                    aria-expanded={isOpen}
                    className={`w-full py-4 lg:py-[1vw] px-5 lg:px-[1.5vw] flex justify-between items-center gap-4 text-left transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-500/10"
                        : "bg-dark-800/30 hover:bg-dark-800/60"
                    }`}
                  >
                    <span className="flex items-baseline gap-3 lg:gap-[0.9vw] min-w-0">
                      <span
                        className={`text-[10px] lg:text-[0.7vw] font-mono tabular-nums transition-colors ${
                          isOpen ? "text-brand-500" : "text-white/25"
                        }`}
                      >
                        {String(item.index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-sm lg:text-[0.9vw] font-medium transition-colors ${
                          isOpen ? "text-brand-500" : "text-white/80"
                        }`}
                      >
                        {item?.name}
                      </span>
                    </span>

                    <span
                      className={`shrink-0 w-6 h-6 lg:w-[1.6vw] lg:h-[1.6vw] rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "border-brand-500 rotate-180" : "border-white/10"
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 lg:w-[0.8vw] lg:h-[0.8vw] transition-colors ${
                          isOpen ? "text-brand-500" : "text-white/40"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 lg:px-[1.5vw] pb-5 lg:pb-[1.2vw] pt-2 bg-dark-800/20">
                          <p className="content-sm text-white/45 mb-4 lg:mb-[1vw]">
                            {item?.data}
                          </p>
                          <Button text="Enquire Now" onClick={openContactModal} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <p className="px-5 lg:px-[1.5vw] py-8 lg:py-[2vw] text-center text-white/40 text-sm lg:text-[0.85vw]">
                No services match &ldquo;{query}&rdquo;.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetail;
