'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from './section';
import Container from './container';

const SingleBanner = ({
  bannerLink = "/",
  mobileImageSrc,
  tabletImageSrc,
  desktopImageSrc,
  altText = "Banner",
}) => {
  return (
    <Section className="my-10 mt-18 md:mt-20">
      <Container>
        <div className="relative">
          <Link href={bannerLink} className="block">
            <div className="relative overflow-hidden rounded-[13px] md:rounded-2xl">
              {/* Mobile Image - 3:1 */}
              <div className="relative aspect-[3/2] w-full sm:hidden">
                <Image
                  src={mobileImageSrc}
                  alt={altText}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw"
                  priority
                />
              </div>

              {/* Tablet Image - 4:1 */}
              <div className="relative hidden aspect-[4/1] w-full sm:block lg:hidden">
                <Image
                  src={tabletImageSrc}
                  alt={altText}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) and (max-width: 1024px) 100vw"
                  priority
                />
              </div>

              {/* Desktop Image - 5:1 */}
              <div className="relative hidden aspect-[5/1] w-full lg:block">
                <Image
                  src={desktopImageSrc}
                  alt={altText}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 100vw"
                  priority
                />
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default SingleBanner;
