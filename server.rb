require 'sinatra'
require 'pry'
require 'pg'



#initial visit to page
get "/" do
  erb :index
end

get "/generate_sound" do
  erb :index
end

