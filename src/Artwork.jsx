// import Image from "next/image"
// import { PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  // ContextMenuSub,
  // ContextMenuSubContent,
  // ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FullStar, EmptyStar, FractionalStar } from "./Ratings.jsx";

// import { Album } from "../data/albums"
// import { playlists } from "../data/playlists"

// interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
//   album: Album
//   aspectRatio?: "portrait" | "square"
//   width?: number
//   height?: number
// }

const AlbumArtwork = ({ book }) => {
  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const fractionalStar = rating - fullStars; // This will be between 0 and 1
    const emptyStars = totalStars - Math.ceil(rating);

    return (
      <>
        {Array.from({ length: fullStars }).map((_, index) => (
          <FullStar key={`full-${index}`} />
        ))}
        {fractionalStar > 0 && (
          <FractionalStar percentage={fractionalStar * 100} key="fractional" />
        )}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <EmptyStar key={`empty-${index}`} />
        ))}
      </>
    );
  };

  var aspectRatio = aspectRatio ? "portrait" : "square";
  return (
    <div className={cn("space-y-3")}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <img
              src={book.coverImg}
              alt={book.title}
              className={cn(
                "h-85 w-full object-cover transition-all hover:scale-105"
                // aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
          {/* <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {playlists.map((playlist) => (
                <ContextMenuItem key={playlist}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                  </svg>
                  {playlist}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub> */}
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{book.title}</h3>
        <p className="text-xs text-muted-foreground">
          {book.authors.map((author, index, array) => (
            <span key={"author_" + author.id}>
              <Link
                to={`/authors/${author.id}`}
                className="text-blue-500 hover:text-blue-600"
              >
                {author.name}
              </Link>
              {index < array.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
        <div className="flex items-center">{renderStars(book.rating)}</div>
      </div>
    </div>
  );
};

AlbumArtwork.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    coverImg: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired, // Make sure this is a number if it's used for calculations
  }).isRequired,
};

export default AlbumArtwork;
