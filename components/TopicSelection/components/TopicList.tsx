"use client";
import Card from "@/components/common/Card";
import { JS_TOPICS } from "@/constant";
import { Grid, Stack, Box } from "@mui/material";
import { useParams, useRouter } from "next/navigation";

const TopicList = () => {
  const router = useRouter();

  const { technology } = useParams();

  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      className="overflow-auto"
    >
      {JS_TOPICS.map(({ id, name, icon, description }) => (
        <Grid size={{ xs: 12, md: 6, lg: 6 }} key={id}>
          <Card
            id={id}
            handleCardClick={() => {
              router.push(`/level/${technology}/${id}`);
            }}
            borderColor="#272c34"
          >
            <Stack textAlign={"start"}>
              <Box display={"flex"} gap={2}>
                <Box className="text-3xl">{icon}</Box>
                <Box
                  color={"white"}
                  fontWeight={"semibold"}
                  textAlign={"start"}
                  className="text-lg"
                >
                  {name}
                </Box>
              </Box>

              <Box className="text-[#707D8F] text-sm">{description}</Box>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopicList;
