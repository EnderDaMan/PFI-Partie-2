import Authorizations from '../authorizations.js';
import Repository from '../models/repository.js';
import PhotoModel from '../models/photo.js';
import PhotoLikeModel from '../models/photolikes.js';
import Controller from './Controller.js';

export default class PhotoLikesController extends Controller {
    constructor(HttpContext) {
        super(HttpContext, new Repository(new PhotoLikeModel()), Authorizations.user());
        this.photoLikesRepository = new Repository(new PhotoLikeModel());
    }

    like(data) {
        let userId = data.userId;
        let photoId = data.photoId;

        if (userId && photoId) {
            let id = userId + photoId;

            let likedPhoto = this.photoLikesRepository.findByField("Id", id);

            //remove if already exists, add if not.
            if (likedPhoto) {
                this.photoLikesRepository.remove(likedPhoto.Id);
                this.HttpContext.response.accepted("Like removed.");

            } else {
                this.photoLikesRepository.add({ Id: id, UserId: userId, PhotoId: photoId });
                likedPhoto = this.photoLikesRepository.findByField("LikeId", likeId);
                this.HttpContext.response.accepted("Like added.");
            }
            this.photoLikesRepository.update(likedPhoto.Id, likedPhoto);

            this.HttpContext.response.updated(likedPhoto);
            this.repository.update(likedPhoto.Id, likedPhoto);

            this.HttpContext.response.updated(likedPhoto);
        } else {
            this.HttpContext.response.badRequest("UserId or PhotoId missing.");
        }
    }

    post(data) {
        let userId = data.userId;
        let photoId = data.photoId;

        if (userId && photoId) {
            let id = userId + photoId;

            let likedPhoto = this.photoLikesRepository.findByField("Id", id);

            //remove if already exists, add if not.
            if (likedPhoto) {
                this.photoLikesRepository.remove(likedPhoto.Id);
                this.HttpContext.response.accepted("Like removed.");
            } else {
                this.photoLikesRepository.add({ Id: id, UserId: userId, PhotoId: photoId });
                this.HttpContext.response.accepted("Like added.");
            }
        } else {
            this.HttpContext.response.badRequest("UserId or PhotoId missing.");
        }
        CachedRequests.clearBypass();
    }
}