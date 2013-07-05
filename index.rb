require 'rubygems'
require 'sinatra'

configure do
  mime_type :appcache, 'text/cache-manifest'
end

get '/' do
  File.read(File.join('public', 'index.html'))
end
