get '/' do
	@posts = Post.all
  erb :index
end

get '/blog' do
	erb :blog
end