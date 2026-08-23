import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Banner from "@/components/reusableComponent/Banner";
import serviceData from "@/components/data/services";
import ServicesDetail from "@/components/services/ServicesDetail";

const ServiceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const matched = serviceData.find((item) => item.slug === slug);
      setData(matched);
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="heading text-white">Service Not Found</h1>
        <a href="/services" className="btn-primary">
          Back to Services
        </a>
      </div>
    );
  }

  return (
    <>
      <Banner data={data?.banner} />
      <ServicesDetail data={data} />
    </>
  );
};

export default ServiceDetail;
