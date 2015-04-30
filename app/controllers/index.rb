get '/' do

  erb :index
end

get '/blog' do
	@posts = Post.all
	
	erb :blog
end

get '/blog/:blog_id' do
	@post = Post.find(params[:blog_id])

	erb :show_blog
end