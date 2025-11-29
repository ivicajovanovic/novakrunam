import { Calendar, Clock, ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import blogData from "@/data/blog-placeholder.json"

/**
 * Future Expansion: Blog / Health Tips Section
 *
 * This component is currently a placeholder structure not active in the main navigation.
 * To activate:
 * 1. Import `BlogSectionPlaceholder` in `app/page.tsx`
 * 2. Place it between the FAQ and Contact sections (or wherever desired)
 * 3. Connect the "Read more" links to actual dynamic routes (e.g., /blog/[slug])
 */

export function BlogSectionPlaceholder() {
  const { section_config, sample_data } = blogData

  return (
    <section id="blog" className="py-24 bg-white border-t border-slate-200">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{section_config.title}</h2>
          <p className="text-lg text-slate-600 mb-8">{section_config.subtitle}</p>

          {/* Standard Disclaimer - Required by Spec */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800 mx-auto inline-flex items-start max-w-2xl text-left">
            <FileText className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-amber-600" />
            <p>{section_config.disclaimer_text}</p>
          </div>
        </div>

        {/* Article Grid - Desktop: 3 cols, Mobile: 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sample_data.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col h-full bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Category & Meta */}
                <div className="flex items-center justify-between mb-4 text-xs font-medium">
                  <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
                    {article.category}
                  </span>
                  <div className="flex items-center text-slate-400">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {article.estimated_read_time}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{article.short_summary}</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  <div className="flex items-center text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {article.publish_date}
                  </div>
                  <span className="text-sm font-semibold text-teal-600 flex items-center group-hover:translate-x-1 transition-transform">
                    Read article
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination / View All Placeholder */}
        <div className="text-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-600 bg-slate-100 rounded-full hover:bg-slate-200 hover:text-slate-900 transition-colors"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  )
}
