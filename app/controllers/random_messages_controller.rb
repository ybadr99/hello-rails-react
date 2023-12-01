class RandomMessagesController < ApplicationController
      def random_greeting
            message =  RandomMessage.order("RANDOM()").first
            render json: { greeting: message.content }
      end
end
