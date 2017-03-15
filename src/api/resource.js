import {
	API_ROOT
} from './config.js'
var apiZhihu = {
	startimage: '/4/start-image/1080*1776',
	news: '/4/news/latest',
	newsbyid: '/4/news/',
	newsbydate: '/4/news/before/',
	newsinfo: '/4/story-extra',
	topics: '/4/themes',
	topicbyid: '/4/theme/',
	sections: '/3/sections',
	sectionbyid: '/3/section',
}
export const NewsResource = API_ROOT.concat( apiZhihu.news )
export const NewsIdResource = API_ROOT.concat( apiZhihu.newsbyid )
export const NewsDateResource = API_ROOT.concat( apiZhihu.newsbydate )
export const NewsInfoResource = API_ROOT.concat( apiZhihu.newsinfo )
export const TopicsResource = API_ROOT.concat( apiZhihu.topics )
export const TopicsIdResource = API_ROOT.concat( apiZhihu.topicbyid )
export const SectionsResource = API_ROOT.concat( apiZhihu.sections )
export const SectionIdResource = API_ROOT.concat( apiZhihu.sectionbyid )
