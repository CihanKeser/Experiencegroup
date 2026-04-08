'use client';

interface MapProps {
  embedUrl?: string;
  title?: string;
}

export function Map({
  embedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3015.183696114929!2d29.165896926035657!3d40.91171797136423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac47178d782d5%3A0x7734a2f93af8b6cc!2sCevizli%2C%20Denizer%20Cd.%20No%3A4%2C%2034865%20Kartal%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1775045821087!5m2!1str!2str",
  title = "Experience Group"
}: MapProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg border border-gray-300">
      <iframe
        src={embedUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
}
