import { Text } from "@chakra-ui/react";
import { PageSection } from "@/shared/components/page-section";

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = "Nothing here yet",
  description = "Publish entries in Strapi to see them on this page.",
}: EmptyStateProps) {
  return (
    <PageSection title={title} description={description} tone="secondary">
      <Text textStyle="body.2" color="neutral.500">
        Check your API token permissions and that the collection has published
        content.
      </Text>
    </PageSection>
  );
}
