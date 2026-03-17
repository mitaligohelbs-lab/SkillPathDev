import { ModalHeaderTypes } from "@/components/types/types";
import { Box } from "@mui/material";
import { Delete } from "lucide-react";

const ModalHeader = ({
  icon,
  modalHeader,
  subTitle,
  handleClose,
}: ModalHeaderTypes) => {
  return (
    <Box className="flex justify-between">
      <div>
        <Box className="text-xl font-semibold flex items-center gap-2">
          {icon}
          {modalHeader}
        </Box>
        <p className="text-[#707d8f] text-sm">{subTitle}</p>
      </div>

      <Delete onClick={handleClose} />
    </Box>
  );
};

export default ModalHeader;
